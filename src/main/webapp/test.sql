CREATE TABLE Boodschapenlijst_item
(
  Boodschappenlijst_item_nummer SERIAL       NOT NULL,
  GebruikerGebruiker_nummer     int4         NOT NULL,
  Boodschappenlijst_nummer      int4         NOT NULL,
  Gebruiker_nummer              int4         NOT NULL UNIQUE,
  Naam                          varchar(255) NOT NULL,
  Beschrijving                  varchar(255) NOT NULL,
  Bedrag                        float4       NOT NULL,
  Datum                         date         NOT NULL,
  PRIMARY KEY (Boodschappenlijst_item_nummer)
);
CREATE TABLE Boodschappenlijst
(
  Lijst_nummer  SERIAL NOT NULL,
  Begin_datum   date   NOT NULL UNIQUE,
  Eind_datum    date,
  Totaal_bedrag float4,
  Totaal_items  int4   NOT NULL,
  PRIMARY KEY (Lijst_nummer)
);
CREATE TABLE Boodschappenlijst_Gebruiker
(
  Booschappenlijs_nummer int4 NOT NULL,
  Gebruiker_nummer       int4 NOT NULL,
  PRIMARY KEY (Booschappenlijs_nummer, Gebruiker_nummer)
);
CREATE TABLE Gebruiker
(
  Gebruiker_nummer SERIAL            NOT NULL,
  Voornaam         varchar(255)      NOT NULL,
  Achternaam       varchar(255)      NOT NULL,
  Email            varchar(255)      NOT NULL UNIQUE,
  Leeftijd         int4,
  Admin_rechten    bytea DEFAULT '0' NOT NULL,
  Wachtwoord_hash  varchar(255)      NOT NULL,
  PRIMARY KEY (Gebruiker_nummer)
);
CREATE TABLE Gebruiker_Huistaak
(
  Gebruiker_nummer int4 NOT NULL,
  Huistaak_nummer  int4 NOT NULL,
  PRIMARY KEY (Gebruiker_nummer, Huistaak_nummer)
);
CREATE TABLE Huistaak
(
  Huistaak_nummer SERIAL       NOT NULL,
  Naam            varchar(255) NOT NULL,
  Beschrijving    varchar(255) NOT NULL,
  PRIMARY KEY (Huistaak_nummer)
);
CREATE TABLE Huistaak_afspraak
(
  Huistaak_afspraak_nummer  SERIAL       NOT NULL,
  Huistaak_nummer           int4         NOT NULL,
  GebruikerGebruiker_nummer int4         NOT NULL,
  Gebruiker                 varchar(255) NOT NULL,
  Gebruiker_nummer          int4         NOT NULL,
  Datum_doen                date,
  Datum_gedaan              date,
  PRIMARY KEY (Huistaak_afspraak_nummer)
);
CREATE UNIQUE INDEX Gebruiker_Gebruiker_nummer ON Gebruiker (Gebruiker_nummer);
ALTER TABLE Boodschapenlijst_item
  ADD CONSTRAINT FKBoodschape797701 FOREIGN KEY (Boodschappenlijst_nummer) REFERENCES Boodschappenlijst (Lijst_nummer);
ALTER TABLE Boodschappenlijst_Gebruiker
  ADD CONSTRAINT FKBoodschapp874261 FOREIGN KEY (Booschappenlijs_nummer) REFERENCES Boodschappenlijst (Lijst_nummer);
ALTER TABLE Gebruiker_Huistaak
  ADD CONSTRAINT FKGebruiker_300456 FOREIGN KEY (Huistaak_nummer) REFERENCES Huistaak (Huistaak_nummer);
ALTER TABLE Huistaak_afspraak
  ADD CONSTRAINT FKHuistaak_a881483 FOREIGN KEY (Huistaak_nummer) REFERENCES Huistaak (Huistaak_nummer);
ALTER TABLE Gebruiker_Huistaak
  ADD CONSTRAINT FKGebruiker_153224 FOREIGN KEY (Gebruiker_nummer) REFERENCES Gebruiker (Gebruiker_nummer);
ALTER TABLE Boodschappenlijst_Gebruiker
  ADD CONSTRAINT FKBoodschapp66577 FOREIGN KEY (Gebruiker_nummer) REFERENCES Gebruiker (Gebruiker_nummer);
ALTER TABLE Huistaak_afspraak
  ADD CONSTRAINT FKHuistaak_a807836 FOREIGN KEY (GebruikerGebruiker_nummer) REFERENCES Gebruiker (Gebruiker_nummer);
ALTER TABLE Boodschapenlijst_item
  ADD CONSTRAINT FKBoodschape518555 FOREIGN KEY (GebruikerGebruiker_nummer) REFERENCES Gebruiker (Gebruiker_nummer);


