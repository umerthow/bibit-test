Q: 
Tuliskan SQL Query untuk mendapatkan data berisi: 
——————————————————————————————————
 | ID | UserName | ParentUserName | 
—————————————————————————————————— | 
 1 | Ali | Budi | 
| 2 | Budi | NULL | 
| 3 | Cecep | Ali | 

A: 
```SQL

select
zz.ID, zz.UserName, xx.Username as ParentUserName
from (select
	b.UserName, b.ID, b.Parent as Parent  from USER b 
) as xx  right join USER zz on zz.Parent = xx.ID
order by zz.ID

```
