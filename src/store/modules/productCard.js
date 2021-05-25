export default {
  state: {
    cards: [
      {
        model: "Jordan 4 Retro Cool Grey (2019)",
        price: 310,
        imgURL:
          "https://images.stockx.com/360/Air-Jordan-4-Retro-Cool-Grey-2019/Images/Air-Jordan-4-Retro-Cool-Grey-2019/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1606318501&fit=clip&fm=webp&ixlib=react-9.1.1&w=1446",
        imgPreviewURL: "String",
        count: 0,
      },
      {
        model: "Jordan 1 High Zoom Air CMFT Black Monarch",
        price: 220,
        imgURL:
          "https://images.stockx.com/360/Air-Jordan-1-High-Zoom-Air-CMFT-Black-Monarch/Images/Air-Jordan-1-High-Zoom-Air-CMFT-Black-Monarch/Lv2/img01.jpg?auto=compress&q=90&dpr=2&updated_at=1611079381&fit=clip&fm=webp&ixlib=react-9.1.1&w=1446",
        imgPreviewURL: "String",
        count: 0,
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getCards: (s) => s.cards,
  },
};
