select name from track where trackid in
	(select trackid from playlisttrack where playlistid in
		(select playlistid from playlisttrack where trackid in 
			(select trackid from track where albumid in 
				(select albumid from album where artistid = 
					(select artistid from artist where name = 'AC/DC')
				)
			)
		)
	) and trackid not in (select trackid from track where albumid in 
				(select albumid from album where artistid = 
					(select artistid from artist where name = 'AC/DC')));