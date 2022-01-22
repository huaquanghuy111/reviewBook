'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Books',
      [
        {
          id: 1,
          title: 'Mắt Biếc',
          decription:
            'Mắt biếc là tiểu thuyết của nhà văn Nguyễn Nhật Ánh trong loạt truyện viết về tình yêu thanh thiếu niên của tác giả này cùng với Thằng quỷ nhỏ, Cô gái đến từ hôm qua,... Đây được xem là một trong những tác phẩm tiêu biểu của Nguyễn Nhật Ánh,',
          thumbnail:
            'https://upload.wikimedia.org/wikipedia/vi/9/92/Mat_Biec.gif',
          KindId: 4,
        },
        {
          id: 2,
          title: 'Vợ Chồng A Phủ',
          decription:
            'Truyện kể về cuộc đời của vợ chồng A Phủ. Mị là cô gái trẻ đẹp, nhà nghèo, sống ở Hồng Ngài. Cô bị bắt có về làm vợ A Sử, làm con dâu gạt nợ cho nhà thống lí Pá Tra. Cô phải lao động quần quật, sống không khác gì con trâu, con ngựa. Khi mùa xuân đến, cô cũng muốn đi chơi liền bị A Sử trói đánh đứng trong buồng. Chỉ đến khi A Sử bị đánh, cô mới được cởi trói để đi lấy lá thuốc, xoa dầu cho chồng.',
          thumbnail:
            'https://i2.wp.com/hemradio.com/wp-content/uploads/2020/11/vo-chong-a-phu-to-hoai.gif?resize=780%2C470&ssl=1',
          KindId: 2,
        },
        {
          id: 3,
          title: 'Nghĩ giàu làm giàu',
          decription:
            '13 Nguyên Tắc Nghĩ Giàu Làm Giàu – Think And Grow Rich là cuốn sách khá thực tế và không mang tính hư cấu, mục đích của nó là truyền tải sự thật phổ quát nhất tới những ai sẵn sàng có thể học không chỉ về những điều cần thực hiện, mà còn là cách thức thực hiện – đồng thời có được sự cổ vũ cần thiết để bắt đầu.',
          thumbnail:
            'https://vothanhnha.com/wp-content/uploads/2020/02/nghigiau-lamgiau.jpg',
          KindId: 1,
        },
        {
          id: 4,
          title: '22 quy luật trong marketing',
          decription:
            'Sự thành công trong kinh doanh hay của một thương hiệu phụ thuộc rất lớn vào cách tiến hành công tác Marketing. Một chương trình Marketing hiệu quả không phải chỉ cần đựơc lên kế hoạch đầy đủ, thực hiện đúng thời điểm và có nguồn tài chính thuận lợi mà còn phải tuân theo những qui luật Marketing.',
          thumbnail: 'https://images.thuvienpdf.com/WdsOeBn2f2.webp',
          KindId: 1,
        },
        {
          id: 5,
          title: 'Ngôn ngữ lập trình C',
          decription:
            'Ngôn ngữ lập trình C là một ngôn ngữ mệnh lệnh được phát triển từ đầu thập niên 1970 bởi Dennis Ritchie để dùng trong hệ điều hành UNIX. Từ đó, ngôn ngữ này đã lan rộng ra nhiều hệ điều hành khác và trở thành một những ngôn ngữ phổ dụng nhất. C là ngôn ngữ rất có hiệu quả và được ưa chuộng nhất để viết các phần mềm hệ thống, mặc dù nó cũng được dùng cho việc viết các ứng dụng. Ngoài ra, C cũng thường được dùng làm phương tiện giảng dạy trong khoa học máy tính mặc dù ngôn ngữ này không được thiết kế dành cho người nhập môn.',
          thumbnail:
            'https://lh3.googleusercontent.com/proxy/yRlCjA1bJKTMp5QQ-18EHkgph6sHtQqiwai14sFVamUlbZujGyPs3K7hVFogkamEK4beA80xYwIuu8kQ0KRBzEwX_ASpFloLI1kweefxyso4vMjpcO7vmTHnzF5tcw',
          KindId: 5,
        },
        {
          id: 6,
          title: 'Đắc Nhân Tâm',
          decription:
            'Đắc Nhân Tâm – Dale Carnegie là một trong những cuốn sách nổi tiếng và bán chạy rất mọi thời đại. Nó đã thu hút được rất nhiều thế hệ của độc giả. Vậy nội dung sách Đắc Nhân Tâm nói về điều gì? Tại sao mọi người lại yêu thích nó đến vậy. Tất cả sẽ được bật mí ngay dưới đây.',
          thumbnail:
            'http://americastarbooks.com/wp-content/uploads/2018/11/noi-dung-sach-dac-nhan-tam.jpg',
          KindId: 3,
        },
        {
          id: 7,
          title: 'Nước Mắt tường vy',
          decription:
            'Vốn là tiểu thư của một nhà kinh doanh đá quý, thế nhưng cha của Cao Thanh Tú Hân không hiểu sao lại để cô lưu lạc nơi cô nhi viện, tuổi thơ trải qua bao khó nhọc...',
          thumbnail:
            'https://static.8cache.com/cover/eJzLyTDWN6sK9HPWTXfNzvIvKLNI9sl2zC-0DMyxyIg3T_PySreoNCj1CTYKDS5OMrRMzXQL8HYyCi7Kiij3MYhyzHRPy44KKnTMDwpKTjYO8jBwNjBP9U-2LTcyNNXNMDYyAgAXpx7g/nuoc-mat-tuong-vi.jpg',
          KindId: 4,
        },
        {
          id: 8,
          title: 'Vợ Nhặt',
          decription:
            'Vợ nhặt là một tác phẩm văn học của nhà văn Kim Lân viết về thời kỳ xảy ra nạn đói năm 1945. In trong tập Con chó xấu xí (truyện ngắn 1962). Tiền thân của truyện là tiểu thuyết Xóm ngụ cư (1946). Tác phẩm được viết ngay sau khi Cách mạng tháng Tám thành công. Tuy nhiên tác phẩm còn dang dở và bị mất bản thảo.',
          thumbnail:
            'http://isach.info/images/story/cover/vo_nhat__kim_lan.jpg',
          KindId: 2,
        },
        {
          id: 9,
          title: 'Dế mèn phiêu lưu ký',
          decription:
            'Dế Mèn phiêu lưu ký là tác phẩm văn xuôi đặc sắc và nổi tiếng nhất của nhà văn Tô Hoài viết về loài vật, dành cho lứa tuổi thiếu nhi. Ban đầu truyện có tên là con dế mèn do Nhà xuất bản Tân Dân, Hà Nội phát hành năm 1941.',
          thumbnail:
            'data:image/jpeg;base64,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',
          KindId: 2,
        },
        {
          id: 10,
          title: 'Chí Phèo',
          decription:
            'Chí Phèo là một truyện ngắn nổi tiếng của nhà văn Nam Cao viết vào tháng 2 năm 1941. Chí Phèo là một tác phẩm xuất sắc, thể hiện nghệ thuật viết truyện độc đáo của Nam Cao, đồng thời là một tấn bi kịch của một người nông dân nghèo bị tha hóa trong xã hội. Chí Phèo cũng là tên nhân vật chính của truyện.',
          thumbnail:
            'https://upload.wikimedia.org/wikipedia/commons/4/42/Chi_Pheo_cover_1957.jpg',
          KindId: 2,
        },
        {
          id: 11,
          title: 'Rich Dad, Poor Dad',
          decription:
            'Rich Dad, Poor Dad (Cha giàu, Cha nghèo) là cuốn sách bán chạy nhất của Robert Kiyosaki. Trong đó, ông bày tỏ thái độ ủng hộ cho sự độc lập về tài chính nhờ đầu tư, bất động sản, kinh doanh và sử dụng tài chính hợp lý.',
          thumbnail:
            'https://upload.wikimedia.org/wikipedia/vi/2/29/Richdadpoordad.jpg',
          KindId: 1,
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {})
  },
}
