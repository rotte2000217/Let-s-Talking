import RedisAdpter from 'src/infra/adpters/redis-adpter'
import SocketIoAdpter from 'src/infra/adpters/socketio-adpter'
import { Queue } from 'src/infra/queue/queue'
import SocketRepositoryRedis from 'src/infra/repository/socket-repository-redis'

export const makeSocketIo = (queue:Queue) => {
	const redisAdpter = new RedisAdpter()
	const socketRepositoryRedis = new SocketRepositoryRedis(redisAdpter)
	const socketIoAdpter2 = new SocketIoAdpter(socketRepositoryRedis,queue)
	return socketIoAdpter2
}