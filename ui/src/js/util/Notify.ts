import Noty from 'noty';

declare type NotyType = 'alert' | 'success' | 'warning' | 'error' | 'info' | 'information';
export default class Notify {

    public static error(text: string): void {
        this.getNoty(text, 'error').show();
    }

    private static getNoty(text: string, type: NotyType): Noty {
        return new Noty({
            text: text,
            theme: 'metroui',
            type: type,
            timeout: 5000,
            progressBar: true
        });
    }

}