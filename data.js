var APP_DATA = {
  "scenes": [
    {
      "id": "0-d1_ok",
      "name": "D1_ok",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7743437148941297,
          "pitch": 0.028002476274046728,
          "rotation": 0,
          "target": "1-d1_inside"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.32416787287631443,
          "pitch": -0.02380660135469803,
          "title": "Tòa D1 - D1 Building",
          "text": "Hội trường lớn - Nơi tổ chức các sự kiện lớn của Học viện, với sức chứa lên đến 500 người"
        }
      ]
    },
    {
      "id": "1-d1_inside",
      "name": "D1_inside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8133394001821657,
          "pitch": 0.2022280488974122,
          "rotation": 0,
          "target": "3-b2_ok"
        },
        {
          "yaw": -2.314385915015256,
          "pitch": -0.0025010053646781216,
          "rotation": 0,
          "target": "0-d1_ok"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-a1_ok",
      "name": "A1_ok",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.5644197632126566,
        "pitch": 0.4510706077970852,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.536744382604784,
          "pitch": 0.3803566602167532,
          "rotation": 0,
          "target": "3-b2_ok"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6256539569460422,
          "pitch": 0.07424601043663337,
          "title": "Tòa A1 - A1 Building",
          "text": "Nơi làm việc của Ban Lãnh đạo Học viện cùng các phòng ban chức năng"
        }
      ]
    },
    {
      "id": "3-b2_ok",
      "name": "B2_ok",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2355759778815507,
          "pitch": 0.40413134542200346,
          "rotation": 0,
          "target": "4-a2_ok"
        },
        {
          "yaw": -2.322458811771515,
          "pitch": -0.0637743004391389,
          "rotation": 0,
          "target": "2-a1_ok"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8538960475460406,
          "pitch": -0.4148228452870413,
          "title": "Tòa B2 - B2 Building",
          "text": "Tầng 1 - Trường Đào tạo bồi dưỡng<div bis_skin_checked=\"1\">Tầng 2 - Phòng Công nghệ thông tin và các phòng thực hành của sinh viên</div><div bis_skin_checked=\"1\">Tầng 3-5 - Các phòng máy thực hành của sinh viên</div>"
        },
        {
          "yaw": 0.003472363989880378,
          "pitch": -0.37616184541596454,
          "title": "Tòa B2 - B2 Building",
          "text": "Thư viện"
        },
        {
          "yaw": 1.1606306419519363,
          "pitch": -0.4150156131163367,
          "title": "Tòa C4 - C4 Building",
          "text": "Tầng 1 - Trung tâm Hỗ trợ đào tạo<div bis_skin_checked=\"1\">Tầng 2 - Ký túc xá Học viện</div>"
        }
      ]
    },
    {
      "id": "4-a2_ok",
      "name": "A2_ok",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3156101093323667,
          "pitch": -0.04096036200056474,
          "rotation": 0,
          "target": "0-d1_ok"
        },
        {
          "yaw": 0.32225837949340885,
          "pitch": -0.09082828571757418,
          "rotation": 0,
          "target": "1-d1_inside"
        },
        {
          "yaw": -2.541154023341516,
          "pitch": 0.3167166060223092,
          "rotation": 0,
          "target": "3-b2_ok"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.0529955608080295,
          "pitch": -0.4115130447465063,
          "title": "Tòa A2 - A2 Building",
          "text": "Nơi làm việc của các Khoa, Bộ môn và Phòng ban chức năng"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
