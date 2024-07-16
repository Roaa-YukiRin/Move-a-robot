-- إنشاء جدول بيانات بعنوان "movement_history"
CREATE TABLE movement_history (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_direction VARCHAR(50) NOT NULL,
    no_Tdirection INT NOT NULL,
    last_direction VARCHAR(50) NOT NULL,
    no_TCount INT NOT NULL
);
ٍ
-- إضافة البيانات إلى الجدول
INSERT INTO movement_history (first_direction, no_Tdirection, last_direction, no_TCount)
VALUES
    ('forward', 1, 'forward', 0),
    ('forward', 2, 'lift', 0),
    ('lift', 2, 'right', 1);

-- عرض البيانات في الجدول
SELECT * FROM movement_history;