Drop table fine;

CREATE TABLE fine(
	id serial NOT NULL PRIMARY KEY,
	info json NOT NULL
);



INSERT INTO fine (info)
VALUES('{
    "Month": "January",
    "Number of Fines": 1608
  }'),
  ('{
    "Month": "February",
    "Number of Fines": 1303
  }'),
  ('{
    "Month": "March",
    "Number of Fines": 982
  }'),
  ('{
    "Month": "April",
    "Number of Fines": 640
  }'),
  ('{
    "Month": "May",
    "Number of Fines": 844
  }'),
  ('{
    "Month": "June",
    "Number of Fines": 844
  }'),
  ('{
    "Month": "July",
    "Number of Fines": 814
  }'),
  ('{
    "Month": "August",
    "Number of Fines": 590
  }'),
  ('{
    "Month": "September",
    "Number of Fines": 489
  }'),
  ('{
    "Month": "October",
    "Number of Fines": 587
  }'),
  ('{
    "Month": "November",
    "Number of Fines": 767
  }'),
  ('{
    "Month": "December",
    "Number of Fines": 902
  }');
