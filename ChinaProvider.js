//我的5个KEY
const keys = ["bcc62222fc634ec736589c483de933e6"];   //bcc62222fc634ec736589c483de933e6   789e558be762ff832392a0393fd8a4f1


// 生成新的key的函数  
function getRandomKey() {  
    const randomIndex = Math.floor(Math.random() * keys.length);  // 随机选择一个索引  
    return keys[randomIndex];  // 返回对应的密钥  
}

var time = new Date().getTime();

// 获取当前日期和时间
const now = new Date();
const year = ('0000' + now.getFullYear()).slice(-4); // 确保年份始终为四位数字
const month = ('0' + (now.getMonth() + 1)).slice(-2); // 加1是因为月份是从0开始的
const day = ('0' + now.getDate()).slice(-2);
// const hours = now.getHours();
// const minutes = now.getMinutes();
// const rightnow = hours + ':' + minutes;
const hours = ('0' + now.getHours()).slice(-2); // 保证两位数字
const minutes = ('0' + now.getMinutes()).slice(-2); // 保证两位数字
const rightnow = `${hours}:${minutes}`; // 使用模板字符串拼接

// 计算最接近的有效小时数
let closestHour = 02; // 初始化为最小的有效小时数
let validHours = [02, 05, 08, 11, 14, 17, 20, 23];

// 找到大于或等于当前小时的第一个有效小时
for (let i = 0; i < validHours.length; i++) {
    if (validHours[i] >= hours) {
        closestHour = validHours[i];
        break;
    }
}

// 如果当前时间已经超过最后一个有效小时，则取第二天的第一个有效小时
if (closestHour === 02 && hours >= 23) {
    day = ('0' + (parseInt(day, 10) + 1)).slice(-2);
}

// 格式化小时数
const hour = ('0' + closestHour).slice(-2);
ChinaProvider = {
    TianDiTu: {
        Normal: {
            Map: "//t{s}.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk={key}",
            Annotion: "//t{s}.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk={key}"
        },
        Satellite: {
            Map: "//t{s}.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk={key}",
            Annotion: "//t{s}.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk={key}",
        },
        Terrain: {
            Map: "//t{s}.tianditu.gov.cn/ter_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk={key}",
            Annotion: "//t{s}.tianditu.gov.cn/cta_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk={key}"
        },
        Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        key: getRandomKey()  // 默认的key使用函数生成的新值
    },

    GaoDe: {
        Normal: {
            Map: '//webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}'
        },
        Satellite: {
            Map: '//webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1',
            Annotion: '//webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1',
            //GDlukuang: '//tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&;t=1&x={x}&y={y}&z={z}&t='+ time,
        },
        Subdomains: ["1", "2", "3", "4"]
    },

    Google: {
        Normal: {
            Map: "//bgn1.gpstool.com/maps/vt?lyrs=p@189&gl=cn&x={x}&y={y}&z={z}"
        },
        Satellite: {
            Map: "//bgn1.gpstool.com/maps/vt?lyrs=s&v=982&x={x}&y={y}&z={z}",  // //bgn1.gpstool.com/vt?lyrs=y&hl=zh-CN&gl=cn&user_id=39895&scale=2&x={x}&y={y}&z={z}   bgn1.gpstool.com/maps/vt?lyrs=s&v=982&gl=cn&x={x}&y={y}&z={z}
            // MapTwo: "http://mobilemaps.googleapis.com/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}",            
            Annotion: "//bgn1.gpstool.com/maps/vt?lyrs=h@189&gl=cn&x={x}&y={y}&z={z}",
            StreetViewlayer: "//cbk.8ditu.com/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m8!1e2!2ssvv!4m2!1scb_client!2sapiv3!4m2!1scc!2s*211m3*211e3*212b1*213e2*211m3*211e2*212b1*213e2!3m3!3sUS!12m1!1e68!4e0",
            // Road: "//google.tigermed.net/maps/vt?lyrs=y@189&gl=cn&x={x}&y={y}&z={z}",
            //m：路线图    t：地形图  p：带标签的地形图  s：卫星图  y：带标签的卫星图  h：标签层（路名、地名等）
        },
        // Subdomains: ["cbk.8ditu.com", "so.wo-123.cn", "look.moller.top", "google.lycorecocafe.com", "search2.bokerqi.top", "sou.mxin.moe", "google.soeasy.sh", "7.cmsmb.com.cn", "google.xuzp.net", "search.codingforjoy.com"],
        // Subdomains: ["bgn1.gpstool.com", "gclient.tempest.com", "webmap.giiiis.com", "6map.cn", "gwxc.shipxy.com", "google.moeyuuko.com", "mobilemaps.googleapis.com", "maps.one-heritage.com", "ge1.azurewebsites.net", "maps.static.system-console.com", "maps.lvtanlian.com", "so.wo-123.cn", "gooo.azurewebsites.net", "google.soeasy.sh", "search2.bokerqi.top", "google.xuzp.net", "search.codingforjoy.com", "dhobi.win", "google.tigermed.net"],
        Subdomains: []
    },


    Geoq: {
        Normal: {
            Map: "//mapnew.geoq.cn/ArcGIS/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}",
            PurplishBlue: "//mapnew.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
            Gray: "//mapnew.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer/tile/tile/{z}/{y}/{x}",
            Warm: "//mapnew.geoq.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{z}/{y}/{x}",
        },
        Theme: {
            Hydro: "//thematic.geoq.cn/arcgis/rest/services/ThematicMaps/WorldHydroMap/MapServer/tile/{z}/{y}/{x}"
        },
        Subdomains: []
    },

    OSM: {
        Normal: {
            Map: "//{s}.tile.osm.org/{z}/{x}/{y}.png",
        },
        Subdomains: ['a', 'b', 'c']
    },

    Baidu: {
        Normal: {
            Map: '//maponline{s}.bdimg.com/tile/?x={x}&y={y}&z={z}&img&qt=vtile&styles=pl&showtext=1&scaler=2&v=083'
        },
        Satellite: {
            Map: '//maponline{s}.bdimg.com/starpic/u=x={x};y={y};z={z};v=009;type=sate&qt=satepc&fm=46&app=webearth2&v=009',
            Annotion: '//maponline{s}.bdimg.com/tile/?x={x}&y={y}&z={z}&img&qt=vtile&styles=sl&showtext=1&scaler=2&v=083'
        },
        //lukuang: {
        //    Map: 'https://seep.eu.org/its.map.baidu.com:8002/traffic/TrafficTileService?x={x}&y={y}&level={z}&time=' + time + '&label=web2D&v=017'
        //},
        Subdomains: '0123',
        tms: true,
    },

    Tencent: {
        Normal: {
            Map: "//rt{s}.map.gtimg.com/realtimerender?z={z}&x={x}&y={-y}&type=vector&styleid=0",//rt3.map.gtimg.com/realtimerender?z={z}&x={x}&y={-y}&type=vector&style=0
        },
        Satellite: {
            Map: "//p{s}.map.gtimg.com/sateTiles/{z}/{sx}/{sy}/{x}_{-y}.jpg",
            Annotion: "//rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={-y}&styleid=2",
            River: "//rt{s}.map.gtimg.com/tile?z={z}&x={x}&y={-y}&type=vector&styleid=3&version=637",            
        },
        Terrain: {
            Map: "//p{s}.map.gtimg.com/demTiles/{z}/{sx}/{sy}/{x}_{-y}.jpg"
        },
        Subdomains: '0123',
    },


    Timeline: {
        time2014: {  //20140220
            Map: "https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/10/{z}/{y}/{x}",  
        },
        time2015: {  //20150218
            Map: "https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/10443/{z}/{y}/{x}",
        },
        time2016: {  //20160217
            Map: "https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/11262/{z}/{y}/{x}",
        },
        time2017: {  //20170227
            Map: "https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/31026/{z}/{y}/{x}",
        },
        time2018: {  //20180223
            Map: "https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/13067/{z}/{y}/{x}",
        },
        time2019: {  //20190424
            Map: "https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/18063/{z}/{y}/{x}",
        },
        time2020: {  //20200520
            Map: "https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/32645/{z}/{y}/{x}",
        },
        time2021: {  //20210428
            Map: "https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/27659/{z}/{y}/{x}",
        },
        time2022: {  //20220608
            Map: "https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/44710/{z}/{y}/{x}",
        },
        time2023: {  //20230629
            Map: "https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/25982/{z}/{y}/{x}",
        },
        time2024: {  //20240328
            Map: "https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/13968/{z}/{y}/{x}",
        },
        Annotion: {
            Map: "http://t{s}.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=56b81006f361f6406d0e940d2f89a39c"
        },
        Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
    },


    ArcGIS: {
        Satellite: {
            Map: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            Annotion: "//t{s}.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk={key}",
        },
        Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        key: getRandomKey()  // 默认的key使用函数生成的新值
    },


    Yandex: {
        Satellite: {
            Map: "//core-sat.maps.yandex.net/tiles?l=sat&x={x}&y={y}&z={z}",
            Annotion: "",
        },
        Subdomains: '1234',
    },

    jilin: {
        Satellite: {
            // Map: "https://api.jl1mall.com/getMap/{z}/{x}/{-y}?mk=2d9bf902749f1630bc25fc720ba7c29f&tk=6a1976c931d388deb9980e6aa81fb842&{s}",
            Map: "https://tile.charmingglobe.com/tile/china2023_5_shield/tms/{z}/{x}/{-y}?v=v1&token=Bearer%20a84a40c81f784490a4c5689187054abf",
            Annotion: "//t{s}.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk={key}"
        },
        Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        key: getRandomKey()  // 默认的key使用函数生成的新值
    },


    Geovisearth: {
        Satellite: {
            // Map: "https://tiles1.geovisearth.com/base/v1/img/{z}/{x}/{y}?format=webp&tmsIds=w&token=e5174df967640c1846a38eb2bf8fafded65e45cf3eb62c05a1d1f3bd4894be3e",82455ef06c72bb3a35bbb4d7d05fd9eceb96a94dc942a056b8feb0e5928ed96f,82455ef06c72bb3a35bbb4d7d05fd9eceb96a94dc942a056b8feb0e5928ed96f
            Map: "https://tiles1.geovisearth.com/base/v1/img/{z}/{x}/{y}?format=webp&tmsIds=w&token=3c7931ed450acfc9c8170efeead4759b146cfb78f0ee6908dd7e287270ee1b6f",
            Annotion: "//t{s}.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk={key}"
        },
        Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        key: getRandomKey()  // 默认的key使用函数生成的新值
    },


    StadiaMaps: {
        Satellite: {
            Map: "https://tiles.stadiamaps.com/data/imagery/{z}/{x}/{y}.jpg",   //https://tiles.stadiamaps.com/data/imagery/{z}/{x}/{y}.jpg     http://t0.gmapgz.com:8880/stadiamaps/{x}/{y}/{z}/
            Annotion: "//t{s}.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk={key}",
            MapBoxMap: "https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.webp?access_token=pk.eyJ1IjoiMTI1NzAzMzAxIiwiYSI6ImNrcTZia3hlbjBqeWsydWx4ZDB6Y2lmYmQifQ.G-OXA6akH8kTr4_FtIVYZQ",   //pk.eyJ1IjoiY3licml3c2t5IiwiYSI6ImNsbXowMDlmczBhMTkyaWxrMThhZ2Y0M3IifQ.ijAivR_EXktXDNnFk6Uzbg
            HereMap: "//{s}.aerial.maps.ls.hereapi.com/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/png8?apiKey=ULcxipCuamEAS6NsNntuAMM84LddvMOlXH0BsE2RfaU",
            YandexMap: "//core-sat.maps.yandex.net/tiles?l=sat&x={x}&y={y}&z={z}",
            Stravaheat:"https://proxy.nakarte.me/https/heatmap-external-a.strava.com/tiles-auth/all/hot/{z}/{x}/{y}.png?px=256",
        },
        Subdomains: ['1', '2', '3', '4'],
        key: getRandomKey()  // 默认的key使用函数生成的新值
    },


    MineData: {
        Satellite: {
            Map: "https://aoweiservice.siweiearth.com/map/new/satellite/{z}/{y}/{x}",  //四维地球
            // Map: "https://services.minedata.cn/service/data/satellite?x={x}&y={y}&z={z}&appKey=ca78282dfff148e3be5390ce027068f5",
            Annotion: "//t{s}.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk={key}"
        },
        Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        key: getRandomKey()  // 默认的key使用函数生成的新值
    },


    AtCloud: {
        Satellite: {
            Map: "https://ovital.21atcloud.com.cn/service/v1/img/china2022/3857/{z}/{x}/{y}.webp?token=fe6955a3c5d041c9bf5a2c85ddd9ea9a021",  
            Annotion: "//t{s}.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk={key}",
        },
        Subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
        key: getRandomKey()  // 默认的key使用函数生成的新值
    },

    Temperature: {
        Satellite: {
            Map: "//gfapi.mlogcn.com/visLayer/v001/tile?meteType=tmp&time=" + year + month + day + hour + "&level={z}&x={x}&y={y}&key=1mfZDdhGQ2cPqz9req3wAUUVTnU1CMPQ",  
        },
        Terrain: {
            Map: "//gfapi.mlogcn.com/visLayer/v001/terrain?level={z}&x={x}&y={y}&key=1mfZDdhGQ2cPqz9req3wAUUVTnU1CMPQ"
        },
        Subdomains: [],
    },

    Precipitation: {
        Satellite: {
            Map: "//gfapi.mlogcn.com/visLayer/v001/tile?meteType=pre&time=" + year + month + day + hour + "&level={z}&x={x}&y={y}&key=1mfZDdhGQ2cPqz9req3wAUUVTnU1CMPQ",  
        },
        Subdomains: [],
    },

    Windspeed: {
        Satellite: {
            Map: "//gfapi.mlogcn.com/visLayer/v001/tile?meteType=ws&time=" + year + month + day + hour + "&level={z}&x={x}&y={y}&key=1mfZDdhGQ2cPqz9req3wAUUVTnU1CMPQ",  
        },
        Subdomains: [],
    },

    Totalcloudcover: {
        Satellite: {
            Map: "//gfapi.mlogcn.com/visLayer/v001/tile?meteType=tcc&time=" + year + month + day + hour + "&level={z}&x={x}&y={y}&key=1mfZDdhGQ2cPqz9req3wAUUVTnU1CMPQ",  
        },
        Subdomains: [],
    },

    Relativehumidity: {
        Satellite: {
            Map: "//gfapi.mlogcn.com/visLayer/v001/tile?meteType=rh&time=" + year + month + day + hour + "&level={z}&x={x}&y={y}&key=1mfZDdhGQ2cPqz9req3wAUUVTnU1CMPQ",  
        },
        Subdomains: [],
    },

    Sealevelpressure: {
        Satellite: {
            Map: "//gfapi.mlogcn.com/visLayer/v001/tile?meteType=mslp&time=" + year + month + day + hour + "&level={z}&x={x}&y={y}&key=1mfZDdhGQ2cPqz9req3wAUUVTnU1CMPQ",  
        },
        Subdomains: [],
    },

    Seasurfacetemperature: {
        Satellite: {
            Map: "//gfapi.mlogcn.com/visLayer/v001/tile?meteType=sst&time=" + year + month + day + hour + "&level={z}&x={x}&y={y}&key=1mfZDdhGQ2cPqz9req3wAUUVTnU1CMPQ",  
        },
        Subdomains: [],
    },

    Seawave: {
        Satellite: {
            Map: "//gfapi.mlogcn.com/visLayer/v001/tile?meteType=shww&time=" + year + month + day + hour + "&level={z}&x={x}&y={y}&key=1mfZDdhGQ2cPqz9req3wAUUVTnU1CMPQ",  
        },
        Subdomains: [],
    },

};