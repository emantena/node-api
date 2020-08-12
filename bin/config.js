const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {
        case 'dev':
        return {
            bd_string: 'mongodb+srv://node-api:6uHNLA6kAa7wwepx@nodeapidemo-c3ob6.mongodb.net/NodeApi?retryWrites=true&w=majority',
            jwt_pass: 'jfasdofjiof342342kjki4$@#$@#dsakdfsaf',
            jwt_expires_in: '7d'
        }
        case 'hml':
        return {
            bd_string: 'mongodb+srv://node-api:6uHNLA6kAa7wwepx@nodeapidemo-c3ob6.mongodb.net/NodeApi?retryWrites=true&w=majority',
            jwt_pass: 'jfasdofjiof342342kjki4$@#$@#dsakdfsaf',
            jwt_expires_in: '7d'
        }

        case 'prod':
        return {
            bd_string: 'mongodb+srv://node-api:6uHNLA6kAa7wwepx@nodeapidemo-c3ob6.mongodb.net/NodeApi?retryWrites=true&w=majority',
            jwt_pass: 'jfasdofjiof342342kjki4$@#$@#dsakdfsaf',
            jwt_expires_in: '7d'
        }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();