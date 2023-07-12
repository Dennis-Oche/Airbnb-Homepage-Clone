import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const homes = [
    {
      "idHome": "1",
      "strHome": "Salobrena, Spain",
      "strHost": "Eloy",
      "strJob": "Entrepreneur",
      "strRating": "New",
      "strDistance": "3,443 kilometers away",
      "strAvailable": "Jan 8 - 15",
      "strPrice": "$459",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720", "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720"]
    },
    {
      "idHome": "2",
      "strHome": "El Port de la Selva, Spain",
      "strHost": "Riley",
      "strJob": "Artist",
      "strRating": "4.74",
      "strDistance": "3,991 kilometers away",
      "strAvailable": "Feb 1 - 7",
      "strPrice": "$393",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720", "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720"]
    },
    {
      "idHome": "3",
      "strHome": "Ponta Delgada, Portugal",
      "strHost": "Christi-Anna",
      "strJob": "Student",
      "strRating": "4.95",
      "strDistance": "4,564 kilometers away",
      "strAvailable": "Jul 21 - 27",
      "strPrice": "$284",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720", "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720"]
    },
    {
      "idHome": "4",
      "strHome": "Joncherey, France",
      "strHost": "Golwen",
      "strJob": "",
      "strRating": "New",
      "strDistance": "4,582 kilometers away",
      "strAvailable": "Mar 31 - Apr 5",
      "strPrice": "$246",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720", "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720"]
    },
    {
      "idHome": "5",
      "strHome": "Guyonvelle, France",
      "strHost": "Edouard",
      "strJob": "Coach Trainer",
      "strRating": "4.64",
      "strDistance": "4,609 kilometers away",
      "strAvailable": "Dec 4 - 9",
      "strPrice": "$107",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720", "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720"]
    },
    {
      "idHome": "6",
      "strHome": "Caylus, France",
      "strHost": "Valentina",
      "strJob": "Interior Designer",
      "strRating": "4.91",
      "strDistance": "4,204 kilometers away",
      "strAvailable": "Oct 31 - Nov 5",
      "strPrice": "$114",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720", "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720"]
    },
    {
      "idHome": "7",
      "strHome": "Nußdorf/Debant, Austria",
      "strHost": "Roberta",
      "strJob": "Wellness",
      "strRating": "4.71",
      "strDistance": "4,580 kilometers away",
      "strAvailable": "Nov 2 - 7",
      "strPrice": "$118",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720", "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720"]
    },
    {
      "idHome": "8",
      "strHome": "Carvoeiro, Portugal",
      "strHost": "Amelia",
      "strJob": "Hosting for 5 years",
      "strRating": "New",
      "strDistance": "3,613 kilometers away",
      "strAvailable": "Oct 20 - 26",
      "strPrice": "$80",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720"]
    },
    {
      "idHome": "9",
      "strHome": "Villarrubia, Spain",
      "strHost": "Zoe",
      "strJob": "Marketing",
      "strRating": "4.93",
      "strDistance": "3,593 kilometers away",
      "strAvailable": "Nov 30 - Dec 5",
      "strPrice": "$196",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720", "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720"]
    },
    {
      "idHome": "10",
      "strHome": "Vilomes, Greece",
      "strHost": "Michelle",
      "strJob": "Food Artists",
      "strRating": "4.91",
      "strDistance": "3,909 kilometers away",
      "strAvailable": "Oct 19 - 24",
      "strPrice": "$201",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720", "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720"]
    },
    {
      "idHome": "11",
      "strHome": "Isle of Wight, UK",
      "strHost": "Werner",
      "strJob": "Cxo",
      "strRating": "4.87",
      "strDistance": "4,942 kilometers away",
      "strAvailable": "Oct 30 - Nov 4",
      "strPrice": "$284",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720", "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720"]
    },
    {
      "idHome": "12",
      "strHome": "Krabčice, Czechia",
      "strHost": "Maria",
      "strJob": "Educator",
      "strRating": "4.91",
      "strDistance": "4,992 kilometers away",
      "strAvailable": "Oct 21 - 26",
      "strPrice": "$68",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720", "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720"]
    },
    {
      "idHome": "13",
      "strHome": "Raray, France",
      "strHost": "Camilla",
      "strJob": "Hosting for 7 years",
      "strRating": "New",
      "strDistance": "4,761 kilometers away",
      "strAvailable": "Mar 5 - 10",
      "strPrice": "$352",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720", "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720"]
    },
    {
      "idHome": "14",
      "strHome": "Canterbury, UK",
      "strHost": "Keith",
      "strJob": "Innkeeper",
      "strRating": "5.0",
      "strDistance": "4,977 kilometers away",
      "strAvailable": "Oct 31 - Nov 5",
      "strPrice": "$394",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720", "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720"]
    },
    {
      "idHome": "15",
      "strHome": "Joncherey, France",
      "strHost": "Thomas",
      "strJob": "Hospitality",
      "strRating": "4.87",
      "strDistance": "4,582 kilometers away",
      "strAvailable": "Nov 20 - 25",
      "strPrice": "$335",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720", "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720"]
    },
    {
      "idHome": "16",
      "strHome": "Noyers-sur-Cher, France",
      "strHost": "Olivier",
      "strJob": "Ssii Manager",
      "strRating": "4.79",
      "strDistance": "4,545 kilometers away",
      "strAvailable": "Dec 4 - 9",
      "strPrice": "$107",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720", "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720"]
    },
    {
      "idHome": "17",
      "strHome": "La Balme-de-Thuy, France",
      "strHost": "Felicitas",
      "strJob": "Tour guide",
      "strRating": "4.88",
      "strDistance": "4,395 kilometers away",
      "strAvailable": "Oct 19 - 24",
      "strPrice": "$176",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720", "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720"]
    },
    {
      "idHome": "18",
      "strHome": "Celle Ligure, Italy",
      "strHost": "Gandolfo",
      "strJob": "Artist",
      "strRating": "4.6",
      "strDistance": "4,243 kilometers away",
      "strAvailable": "Oct 21 - 27",
      "strPrice": "$188",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720", "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720"]
    },
    {
      "idHome": "19",
      "strHome": "Bolzano, Italy",
      "strHost": "Antonella",
      "strJob": "Beauty",
      "strRating": "4.74",
      "strDistance": "4,513 kilometers away",
      "strAvailable": "Oct 23 - 28",
      "strPrice": "$257",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720", "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720"]
    },
    {
      "idHome": "20",
      "strHome": "Offranville, France",
      "strHost": "Patricia",
      "strJob": "",
      "strRating": "New",
      "strDistance": "4,834 kilometers away",
      "strAvailable": "Oct 22 - 29",
      "strPrice": "$152",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720", "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720"]
    },
    {
      "idHome": "21",
      "strHome": "Lauterach, Austria",
      "strHost": "Romain",
      "strJob": "Artist",
      "strRating": "4.8",
      "strDistance": "4,601 kilometers away",
      "strAvailable": "Feb 28 - Mar 5",
      "strPrice": "$130",
      "strHomeThumb": ["https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/1a40a5f3-6b7a-4f52-a5a3-25f68c0afa5e.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-584469386220279136/original/227d4c26-43d5-42da-ad84-d039515c0bad.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/f43afc6d-58dd-4d4d-bf5d-354e39c70273.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51117425/original/6681a807-1abf-4984-b049-07a8fbd4481d.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/309bee53-311d-4f07-a2e7-14daadbbfb77.jpg?im_w=720", "https://a0.muscache.com/im/pictures/5dba523d-5358-4a0f-be80-cd535e82c3ac.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50717920/original/986f782d-68aa-429a-b1cd-57528fd891af.png?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-51188616/original/0ff70bd6-791a-4035-b6de-0ed9135cdda1.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/d403bbbf-2767-4b26-a165-7a8286833eb3.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-16472324/original/b0f24886-b049-4d88-aa86-12bd1cb17ca8.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/2ce2f829-7965-479a-af98-c5a84824ce06.jpg?im_w=720", "https://a0.muscache.com/im/pictures/00370466-e3f6-4213-aaff-10b2a51a7e15.jpg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-50650118/original/c8533ad7-d572-4869-b002-19b9a355fadf.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720", "https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720", "https://a0.muscache.com/im/pictures/57c386b4-9f3e-4468-81f4-93b31219e621.jpg?im_w=720", "https://a0.muscache.com/im/pictures/7e182664-02ca-4027-82b9-1e5869457d42.jpg?im_w=720", "https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=720"]
    }
  ];

  const filters = [
    {
      "imgSource": "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg",
      "imgId": "filter1",
      "imgAlt": "Design"
    },
    {
      "imgSource": "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
      "imgId": "filter2",
      "imgAlt": "Amazing pools"
    },
    {
      "imgSource": "https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg",
      "imgId": "filter3",
      "imgAlt": "Bed & breakfasts"
    },
    {
      "imgSource": "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg",
      "imgId": "filter4",
      "imgAlt": "National parks"
    },
    {
      "imgSource": "https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg",
      "imgId": "filter5",
      "imgAlt": "Beach"
    },
    {
      "imgSource": "https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg",
      "imgId": "filter6",
      "imgAlt": "Shared homes"
    },
    {
      "imgSource": "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
      "imgId": "filter7",
      "imgAlt": "OMG!"
    },
    {
      "imgSource": "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
      "imgId": "filter8",
      "imgAlt": "Mansions"
    },
    {
      "imgSource": "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
      "imgId": "filter9",
      "imgAlt": "Iconic cities"
    },
    {
      "imgSource": "https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg",
      "imgId": "filter10",
      "imgAlt": "Caves"
    },
    {
      "imgSource": "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
      "imgId": "filter11",
      "imgAlt": "Tropical"
    },
    {
      "imgSource": "https://a0.muscache.com/pictures/687a8682-68b3-4f21-8d71-3c3aef6c1110.jpg",
      "imgId": "filter12",
      "imgAlt": "Boats"
    },
    {
      "imgSource": "https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg",
      "imgId": "filter13",
      "imgAlt": "Islands"
    },
    {
      "imgSource": "https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg",
      "imgId": "filter14",
      "imgAlt": "Arctic"
    },
    {
      "imgSource": "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg",
      "imgId": "filter15",
      "imgAlt": "Tiny homes"
    },
    {
      "imgSource": "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
      "imgId": "filter16",
      "imgAlt": "Amazing views"
    },
    {
      "imgSource": "https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg",
      "imgId": "filter17",
      "imgAlt": "Houseboats"
    },
    {
      "imgSource": "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg",
      "imgId": "filter18",
      "imgAlt": "Luxe"
    },
    {
      "imgSource": "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
      "imgId": "filter19",
      "imgAlt": "Beachfront"
    },
    {
      "imgSource": "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
      "imgId": "filter20",
      "imgAlt": "Countryside"
    }
  ];

  const likeFunction = (idHome) => {
    let likedCard = homes.find((home) => home.idHome === idHome);
    let cardButton = document.getElementById(likedCard.idHome);
    if (cardButton.className !== "like-btn") {
      cardButton.className = "like-btn";
    }
    else {
      cardButton.className = "like-btn-selected";
    }
  }



  return <AppContext.Provider value={{homes, filters, likeFunction}}>
    {children}
  </AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
