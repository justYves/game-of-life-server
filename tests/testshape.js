var shape = {
    fox: {
        voxels: {
            '0|0|-5': 3,
            '0|1|-5': 3,
            '0|0|2': 3,
            '0|1|2': 3,
            '3|0|2': 3,
            '3|1|2': 3
        },
        colors: [
            [0.1803921568627451, 0.8, 0.44313725490196076],
            [0.20392156862745098, 0.596078431372549, 0.8588235294117647],
            [0.20392156862745098, 0.28627450980392155, 0.3686274509803922],
            [0.9019607843137255, 0.49411764705882355, 0.13333333333333333],
            [0.9254901960784314, 0.9411764705882353, 0.9450980392156862]
        ],
        bounds: [
            [-1, -1, -13],
            [4, 7, 7]
        ],
        scale: 0.4,
        display: 0.2
    },
    lion: {
        voxels: {
            '1|1|-6': 6,
            '-5|1|2': 6,
            '-4|1|-5': 6,
            '-3|1|-5': 6,
            '1|1|-5': 6,
            '-4|1|2': 6,
            '0|4|9': 5,
            '-1|4|9': 5,
            '-2|4|9': 5,
            '-2|3|10': 4,
            '0|3|10': 4
        },
        colors: [
            [0.9098039215686274, 0.22745098039215686, 0.596078431372549],
            [0.6901960784313725, 0.45098039215686275, 0.17254901960784313],
            [0.15294117647058825, 0.21176470588235294, 0.27058823529411763],
            [0.9019607843137255, 0.49411764705882355, 0.13333333333333333],
            [0.9254901960784314, 0.9411764705882353, 0.9450980392156862],
            [0.5607843137254902, 0.12941176470588237, 0.12941176470588237],
            [0.9215686274509803, 0.807843137254902, 0.21176470588235294]
        ],
        bounds: [
            [-6, 0, -8],
            [4, 9, 10]
        ],
        scale: 0.3,
        display: 0.3
    },
    turtle: {
        voxels: {
            '7|1|-4': 1,
            '7|1|-5': 1,
            '7|2|-5': 10,
            '6|2|-5': 7,
            '8|2|-5': 7,
            '7|1|-6': 6
        },
        colors: [
            [0.1803921568627451, 0.8, 0.44313725490196076],
            [0.047058823529411764, 0.5098039215686274, 0.17647058823529413],
            [0.20392156862745098, 0.28627450980392155, 0.3686274509803922],
            [0.9019607843137255, 0.49411764705882355, 0.13333333333333333],
            [0.9254901960784314, 0.9411764705882353, 0.9450980392156862],
            [0, 0, 0],
            [0.34509803921568627, 0.6588235294117647, 0.19607843137254902],
            [0.5490196078431373, 0.3568627450980392, 0.06666666666666667],
            [0.3803921568627451, 0.27450980392156865, 0.07058823529411765],
            [0, 0, 0],
            [0.6509803921568628, 0.41568627450980394, 0.06666666666666667]
        ],
        bounds: [
            [-1, -1, -6],
            [9, 5, 4]
        ],
        scale: 0.5,
        display: 0.1
    }
}
module.exports = shape;