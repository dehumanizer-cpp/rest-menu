import { Roboto, Crimson_Text } from 'next/font/google'

export const roboto = Roboto({
    subsets: ['latin'],
    weight:['900', '500', '100'], 
    style:['normal', 'italic'],
    variable:'--roboto-font'
});

export const crimson_text = Crimson_Text({
    weight: ['400'],
    subsets: ['latin'],
    variable:'--crimson-text-font'
})