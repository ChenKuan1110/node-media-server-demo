const NodeMediaServer = require('node-media-server')

const config = {
  rtmp: {
    port: 1936,
    chunk_size: 60000,
    gop_chache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    mediaroot: './media',
    allow_origin: '*',
  },
  https: {
    port: 8443,
    key:'./cert/privatekey.pem',
    cert:'./cert/certificate.pem',
  },
  // 转格式
  trans: {
    ffmpeg: '/Users/ck/Documents/Utils/ffmpeg',
    tasks: [
      {
        app: 'live',
        hls: true,
        hslFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
        dash: true,
        dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
      }
    ]
  },
  // 动态推流
  // relay: {
  //   ffmpeg: '/Users/ck/Documents/Utils/ffmpeg',
  //   tasks: [
  //     {
  //       app: 'test_push',
  //       mode: 'push',
  //       edge: 'rtmp://'
  //     }
  //   ]
  // }
}

const nms = new NodeMediaServer(config)
nms.run()
