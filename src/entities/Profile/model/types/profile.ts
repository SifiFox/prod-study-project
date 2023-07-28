import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export interface Profile{
      firstname?: string,
      lastname?: string,
      age?: number,
      city?: string,
      username?: string,
      avatar?: string
      currency?: Currency,
      country?: Country,
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean
}
