import { handleHttpResponse, authPost, fetchJson } from './utils';

type finalSignupBody = {
  password: string,
  passwordConfirmation: string,
  firstName: string,
  lastName: string
};

export default {
  /**
   * Initiates a signup
   */
  initialSignup: (email: string) =>
    fetchJson('/api/initial_signup', { data: { email }, method: 'POST' }).then(
      handleHttpResponse
    ),

  /**
   * Initiates a representative signup
   */
  initialRepresentativeSignup: data =>
    authPost('/api/initial_representative_signup', data),

  /**
   * Gets an ongoing signup process
   */
  getCurrentSignup: (signupKey: string) =>
    fetch(`/api/initial_signup/${signupKey}`).then(handleHttpResponse),

  finalizeSignup: (signupKey: string, body: finalSignupBody) =>
    fetchJson(`/api/final_signup/${signupKey}`, {
      data: body,
      method: 'POST'
    }).then(handleHttpResponse)
};
