
use PetsInfoB;

create table TB_PET(
	id_pet int primary key auto_increment,
    nm_pet varchar(50)
);

    SELECT id_pet			id,
        nm_pet			nome
    FROM TB_PET;

INSERT INTO TB_PET (nm_pet)
                        VALUES ("Pred")