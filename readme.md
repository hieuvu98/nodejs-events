# Setup
- nodejs: v14
- Thay đổi thông số kết nối trong file config.env


### Yêu cầu: Viết chương trình tiếp nhận và liệt kê các event đã nhận được:
/event/create
- Method: POST
- uri: /event/create
- body: 
{
	id: String,
	name: String,
	description: String
}
- yêu cầu: lưu trữ lại
===> code có performance tốt nhất thì sẽ thằng

/event/list
- Method: GET
- uri: /event/lastest
- yêu cầu: trả về 10 events mới nhất
===> code có performance tốt nhất thì sẽ thằng, phải đúng là 10 events mới nhất (100rps)

/event/filter
- Method: GET
- uri: /event/filter?page=XXX&size=YYY
- yêu cầu: trả về đúng bản ghi đã nhận theo page(1, 2, 3) & size (10, 20, 30)


* V/v tham gia
- Đăng ký tham gia trước 17h30 thứ 6 ngày 02/01/2021
- Gửi lại github + setup ứng dụng & db trước 9h T7 ngày 03/07/2021
- Khuyến cáo redis
- Ngôn ngữ tuỳ
