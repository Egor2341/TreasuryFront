import axiosInstance from './axiosInstance';
import type { 
    LoginCredentials,
    AuthResponse,
    RegisterData,
    OAuth2LoginForm
} from '../types/auth';

class AuthService {

    private convertToOAuth2Form(credentials: LoginCredentials): OAuth2LoginForm {
        return {
        username: credentials.email, 
        password: credentials.password,
        grant_type: 'password',
        scope: 'read write'
        };
    }

  async login(credentials: LoginCredentials): Promise<AuthResponse> {

    const formData = this.convertToOAuth2Form(credentials);

    const params = new URLSearchParams();
    
    params.append('username', formData.username);
    params.append('password', formData.password);
    
    if (formData.scope) {
      params.append('scope', formData.scope);
    }
    
    if (formData.grant_type) {
      params.append('grant_type', formData.grant_type);
    }

    const response = await axiosInstance.post<AuthResponse>(
      '/auth/login',
      params,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    if (response.data.access_token) {
      localStorage.setItem('accessToken', response.data.access_token);
      localStorage.setItem('refreshToken', response.data.refresh_token);
    }
    
    return response.data;
  }

  async register(userData: RegisterData){
    await axiosInstance.post<AuthResponse>(
      '/auth/register',
      userData
    );
}

  logout(){
    localStorage.setItem('accessToken', "");
    localStorage.setItem('refreshToken', "");
    window.location.href = "/welcome"
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('accessToken');
  }
}

export default new AuthService();