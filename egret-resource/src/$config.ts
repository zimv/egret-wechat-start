class $config{
    public env = 'dev';//dev or product

    public hosts = {
        dev: 'https://xxxx.com',
        product: 'https://xxxxxxx.com'
    }
    public envKey = this.env || 'product';

    public main = this.hosts[this.envKey];

    public gender = {
        male: 1,
        female: 2,
        unknown: 0
    }
}
const CONFIG = new $config();