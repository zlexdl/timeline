// 示例交易数据
const transactions = [
    {
        id: "1",
        title: "Uniswap: 1 ETH to 3500 USDT, Gas: $3.5",
        description: "Transaction on ETH Mainnet",
        startdate: "2023-06-01 12:00:00",
        enddate: "2023-06-01 12:00:00",
        importance: 50,
        icon: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
        img: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
        focus: true
    },
    {
        id: "2",
        title: "Linea transaction",
        description: "Transaction on Linea",
        startdate: "2023-06-02 15:00:00",
        enddate: "2023-06-02 15:00:00",
        importance: 30,
        icon: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
        img: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
        focus: true
    }
];

$(document).ready(function() {
    $("#timeline_container").timeglider({
        data_source: {
            id: "timeline",
            title: "Blockchain Transaction Timeline",
            events: transactions
        },
        initial_focus: "2023-06-01 12:00:00",
        display_zoom_level: 50,
        min_zoom: 1,
        max_zoom: 100,
        bg_color: "#eee",
        mousewheel: "zoom",
        image_lane_height: 80,
        icon_folder: "https://cdn-icons-png.flaticon.com/512/",
        timezone: "UTC",
        show_centerline: true,
        show_footer: true
    });
});
