const lodash = require("lodash");
const response = require("../consts/response");

const bannerController = {
    index: (req, res) => {
        const banners = [];
        const mockData = [
            "http://localhost:3000/images/banners/girl1.jpg",
            "http://localhost:3000/images/banners/girl2.jpg",
            "http://localhost:3000/images/banners/girl3.jpg",
        ];
        for (let i = 0; i < 10; i++) {
            banners.push({
                title: `Banner ${i}`,
                sub_title: `Banner ${i}`,
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
                " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                image_path: mockData[lodash.random(0, mockData.length)],
            });
        }
        const data = {
            code: response.success,
            message: "Get list banner successfully",
            banners,
        };
        res.json(data);
    },
};

module.exports = bannerController;
