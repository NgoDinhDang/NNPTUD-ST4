# Inventory API - NNPTUD ST4

## Cài đặt
npm install

## Chạy chương trình
npm start

Server chạy tại:
http://localhost:3000

## API test bằng Postman

1. Tạo product
POST /api/products

2. Lấy danh sách inventory
GET /api/inventories

3. Lấy inventory theo ID
GET /api/inventories/:id

4. Thêm stock
POST /api/inventories/add-stock

5. Giảm stock
POST /api/inventories/remove-stock

6. Reservation (giữ hàng)
POST /api/inventories/reservation

7. Sold (bán hàng)
POST /api/inventories/sold