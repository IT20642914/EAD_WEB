import { TicketReservationDetailsDto } from "../models";
import {
  SeatNumber,
  sheduleTrainDetailsGridDto,
  trainDetailsDto,
  trainDetailsGridDto,
} from "../models/trains.model";
import { travellerDto } from "../models/travellor.model";

export const travellerData: travellerDto[] = [
  {
    travellerId: "1",
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    userName: "johndoe123",
    status: true,
    contactHome: "123-456-7890",
    contactMobile: "987-654-3210",
    address: "123 Main Street, City",
    reservationCount: "3",
    createdDate: "2023-09-29",
  },
  {
    travellerId: "2",
    firstName: "Alice",
    lastName: "Smith",
    email: "alicesmith@example.com",
    userName: "alicesmith456",
    status: false,
    contactHome: "111-222-3333",
    contactMobile: "999-888-7777",
    address: "456 Elm Street, Town",
    reservationCount: "1",
    createdDate: "2023-09-30",
  },
  {
    travellerId: "3",
    firstName: "Ella",
    lastName: "Johnson",
    email: "ellaj@example.com",
    userName: "ellaj567",
    status: true,
    contactHome: "555-555-5555",
    contactMobile: "444-444-4444",
    address: "789 Oak Avenue, Village",
    reservationCount: "5",
    createdDate: "2023-10-01",
  },
  {
    travellerId: "4",
    firstName: "Michael",
    lastName: "Brown",
    email: "michaelbrown@example.com",
    userName: "mbrown789",
    status: true,
    contactHome: "777-888-9999",
    contactMobile: "666-555-4444",
    address: "101 Pine Road, Suburb",
    reservationCount: "2",
    createdDate: "2023-10-02",
  },
  {
    travellerId: "5",
    firstName: "Sophia",
    lastName: "Wilson",
    email: "sophiaw@example.com",
    userName: "swilson123",
    status: false,
    contactHome: "222-333-4444",
    contactMobile: "333-222-1111",
    address: "222 Cedar Lane, County",
    reservationCount: "4",
    createdDate: "2023-10-03",
  },
  {
    travellerId: "6",
    firstName: "David",
    lastName: "Lee",
    email: "davidlee@example.com",
    userName: "dlee456",
    status: true,
    contactHome: "555-888-7777",
    contactMobile: "777-999-3333",
    address: "555 Maple Drive, Suburb",
    reservationCount: "3",
    createdDate: "2023-10-04",
  },
  {
    travellerId: "7",
    firstName: "Olivia",
    lastName: "Martinez",
    email: "oliviam@example.com",
    userName: "omartinez789",
    status: false,
    contactHome: "333-666-2222",
    contactMobile: "555-444-1111",
    address: "789 Pine Lane, County",
    reservationCount: "2",
    createdDate: "2023-10-05",
  },
  {
    travellerId: "8",
    firstName: "James",
    lastName: "Taylor",
    email: "jamestaylor@example.com",
    userName: "jtaylor123",
    status: true,
    contactHome: "111-555-3333",
    contactMobile: "999-222-7777",
    address: "888 Cedar Road, Village",
    reservationCount: "6",
    createdDate: "2023-10-06",
  },
  // Add more sample data objects as needed
];

export const ticketReservations: TicketReservationDetailsDto[] = [
  {
    referenceID: "REF1001",
    reservationID: "RES1001",
    TicketType: "First Class",
    ReservedPesonName: "John Smith",
    ReserverNationalID: "US123456789",
    ticketIDs: ["TICKET001", "TICKET002", "TICKET003"],
    ticketCount: 3,
    seatNumbers: ["A1", "A2", "A3"],
    trainName: "Express 101",
    depatureFromDateandTime: "2023-10-10 08:00",
    depatureFrom: "New York",
    arriveDateAndTime: "2023-10-10 16:00",
    arriveTo: "Chicago",
    totalPrice: 250,
  },
  {
    referenceID: "REF1002",
    reservationID: "RES1002",
    TicketType: "Second Class",
    ReservedPesonName: "Emily Johnson",
    ReserverNationalID: "US987654321",
    ticketIDs: ["TICKET004", "TICKET005"],
    ticketCount: 2,
    seatNumbers: ["B1", "B2"],
    trainName: "Express 101",
    depatureFromDateandTime: "2023-10-10 08:00",
    depatureFrom: "New York",
    arriveDateAndTime: "2023-10-10 16:00",
    arriveTo: "Chicago",
    totalPrice: 150,
  },
  {
    referenceID: "REF1003",
    reservationID: "RES1003",
    TicketType: "First Class",
    ReservedPesonName: "Michael Davis",
    ReserverNationalID: "US555555555",
    ticketIDs: ["TICKET006"],
    ticketCount: 1,
    seatNumbers: ["C1"],
    trainName: "Express 101",
    depatureFromDateandTime: "2023-10-10 08:00",
    depatureFrom: "New York",
    arriveDateAndTime: "2023-10-10 16:00",
    arriveTo: "Chicago",
    totalPrice: 75,
  },
  {
    referenceID: "REF1004",
    reservationID: "RES1004",
    TicketType: "Second Class",
    ReservedPesonName: "Sarah Wilson",
    ReserverNationalID: "US666666666",
    ticketIDs: ["TICKET007"],
    ticketCount: 1,
    seatNumbers: ["D1"],
    trainName: "Express 101",
    depatureFromDateandTime: "2023-10-10 08:00",
    depatureFrom: "New York",
    arriveDateAndTime: "2023-10-10 16:00",
    arriveTo: "Chicago",
    totalPrice: 55,
  },
  {
    referenceID: "REF1005",
    reservationID: "RES1005",
    TicketType: "First Class",
    ReservedPesonName: "Robert Lee",
    ReserverNationalID: "US777777777",
    ticketIDs: ["TICKET008", "TICKET009"],
    ticketCount: 2,
    seatNumbers: ["E1", "E2"],
    trainName: "City Connect 202",
    depatureFromDateandTime: "2023-10-11 09:30",
    depatureFrom: "Los Angeles",
    arriveDateAndTime: "2023-10-11 17:30",
    arriveTo: "San Francisco",
    totalPrice: 180,
  },
  {
    referenceID: "REF1006",
    reservationID: "RES1006",
    TicketType: "Second Class",
    ReservedPesonName: "Olivia Jones",
    ReserverNationalID: "US888888888",
    ticketIDs: ["TICKET010"],
    ticketCount: 1,
    seatNumbers: ["F1"],
    trainName: "City Connect 202",
    depatureFromDateandTime: "2023-10-11 09:30",
    depatureFrom: "Los Angeles",
    arriveDateAndTime: "2023-10-11 17:30",
    arriveTo: "San Francisco",
    totalPrice: 90,
  },
  {
    referenceID: "REF1007",
    reservationID: "RES1007",
    TicketType: "First Class",
    ReservedPesonName: "David White",
    ReserverNationalID: "US999999999",
    ticketIDs: ["TICKET011"],
    ticketCount: 1,
    seatNumbers: ["G1"],
    trainName: "City Connect 202",
    depatureFromDateandTime: "2023-10-11 09:30",
    depatureFrom: "Los Angeles",
    arriveDateAndTime: "2023-10-11 17:30",
    arriveTo: "San Francisco",
    totalPrice: 90,
  },
  {
    referenceID: "REF1008",
    reservationID: "RES1008",
    TicketType: "Second Class",
    ReservedPesonName: "Emma Martin",
    ReserverNationalID: "US111111111",
    ticketIDs: ["TICKET012"],
    ticketCount: 1,
    seatNumbers: ["H1"],
    trainName: "City Connect 202",
    depatureFromDateandTime: "2023-10-11 09:30",
    depatureFrom: "Los Angeles",
    arriveDateAndTime: "2023-10-11 17:30",
    arriveTo: "San Francisco",
    totalPrice: 50,
  },
  // Add more sample data entries here...
];

export const TrainDataset: trainDetailsDto[] = [
  {
    id: 1,
    name: "Train A",
    schedule: [],
  stations: [
      {
        stationId: "station1",
        stationName: "Station X",
      },
      {
        stationId: "station3",
        stationName: "Station Z",
      },
    ],
  },
  {
    id: 3,
    name: "Train C",
    schedule: [],
    stations: [
      {
        stationId: "station2",
        stationName: "Station Y",
      },
      {
        stationId: "station4",
        stationName: "Station W",
      },
    ],
  },
  {
    id: 4,
    name: "Train D",
    schedule: [],
    stations: [
      {
        stationId: "station3",
        stationName: "Station Z",
      },
      {
        stationId: "station5",
        stationName: "Station V",
      },
    ],
  },
];

// export const TrainDetailsList: trainDetailsGridDto[] = [
//   {
//     id: 1,
//     name: "Train 101",
//     firstClassSeatCount: 20,
//     secondClassSeatCount: 50,
//     thirdClassSeatCount: 100,
//     status: true,
//   },
//   {
//     id: 2,
//     name: "Train 102",
//     firstClassSeatCount: 18,
//     secondClassSeatCount: 45,
//     status: true,
//     thirdClassSeatCount: 90,
//   },
//   {
//     id: 3,
//     name: "Train 103",
//     firstClassSeatCount: 22,
//     secondClassSeatCount: 55,
//     thirdClassSeatCount: 110,
//     status: false,
//   },
//   {
//     id: 4,
//     name: "Train 104",
//     firstClassSeatCount: 16,
//     secondClassSeatCount: 40,
//     status: true,
//     thirdClassSeatCount: 80,
//   },
// ];

export const SheduleList: sheduleTrainDetailsGridDto[] = [
  {
    trainId: "1",
    status: true,
    trainName: "Train 1",
    startingStation: "Station A",
    arrivingStation: "Station B",
    schedule: [
      {
        stationId: "1",
        stationName: "stationName A",
        arrivalAt: "08:00 AM",
        departureAt: "08:15 AM",
        distanceFromStartPoint: 0,
      },
      {
        stationId: "2",
        stationName: "Station B",
        arrivalAt: "09:30 AM",
        departureAt: "09:45 AM",
        distanceFromStartPoint: 50,
      },
    ],
    stations: [
      {
        stationId: "1",
        stationName: "Station A",
      },
      {
        stationId: "2",
        stationName: "Station B",
      },
      // Add more station data here...
    ],
  },
];

export const SeatList: SeatNumber[] = [
  { id: 1, name: "Seat 1" },
  { id: 2, name: "Seat 2" },
  { id: 3, name: "Seat 3" },
  // Add more data as needed
];
