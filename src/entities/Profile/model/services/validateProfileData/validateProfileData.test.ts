import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
    username: 'test',
    firstname: 'firstname',
    lastname: 'lastname',
    currency: Currency.EUR,
    country: Country.Belarus,
    city: 'Minsk',
    age: 23,
};

describe('validateProfileData', () => {
    test('test success', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('test without firstname and lastname', async () => {
        const result = validateProfileData({ ...data, firstname: '', lastname: '' });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('test incorrect aage', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('test incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('test incorrect all', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
