/**
 * Validate an email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean}
 */
export function validate(email: string);


/**
 * Async email validation.
 * @param {string} email - The email address to validate.
 * @param {AsyncCallback} callback - The callback to execute.
 */
export function validate_async(email: string, callback: AsyncCallback);


export interface AsyncCallback {
    (err: any, isValideEmail: boolean): any;
}