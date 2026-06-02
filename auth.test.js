const login = require('./login');

describe('Login Function Test', () => {

    test('Đăng nhập đúng tài khoản và mật khẩu', () => {
        expect(login('admin', '123')).toBe(true);
    });

    test('Sai mật khẩu', () => {
        expect(login('admin', '456')).toBe(false);
    });

    test('Sai tên đăng nhập', () => {
        expect(login('user', '123')).toBe(false);
    });

    test('Sai cả tài khoản và mật khẩu', () => {
        expect(login('user', '456')).toBe(false);
    });

});
