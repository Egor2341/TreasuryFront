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
    
    if (response.data.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
    }
    
    return response.data;
  }

  async register(userData: RegisterData): Promise<AuthResponse> {
    const response = await axiosInstance.post<AuthResponse>(
      '/auth/register',
      userData
    );
    
    if (response.data.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
    }
    
    return response.data;
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