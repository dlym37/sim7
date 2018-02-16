create table animals (
    id serial primary key,
    title text,
    image text,
    weight float(5, 7) /*SIM 2 69G*/
)

insert into animals (title, image)
values ('Elephant', 'http://media.istockphoto.com/photos/elephant-isolated-on-white-with-clipping-path-included-picture-id166228761?k=6&m=166228761&s=612x612&w=0&h=UcaHnTm_s1UgiTJKc8fRjYOSxsbdM3eCWAFICbKPXmA=', 1000.23 ),
('Sad Dog', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUEGUZeSKW7nzTaWkHYN1ta7Snp6etIA-kbx1ZyxTpOtDaH37n', 123.675)


create table location (
    id serial primary key,
    home text,
    animalId int,
    foreign key (animalId) references animals(id) /*SIM3 68C */
)

insert into location (home, animalId) 
values ('africa', 1), ('US', 2)


create table join ( 
    animalId int,
    locationId int,
    foreign key (animalId) references animals(id),
    foreign key (locationId) references location(id)
)

insert into join (animalId, locationId) /*sim3 68D*/
values (1, 1), (2, 2)