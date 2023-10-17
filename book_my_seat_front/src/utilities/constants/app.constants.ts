export const ALERT_CONFIGS = {
    TIMEOUT: 4000,
    AUTO_CLEAR: true,
  };
  export const APP_TABLE_CONFIGS = {
    DEFAULT_ROWS_PER_PAGE_OPTIONS: [5, 10, 15, 25, 50, 100],
    DEFAULT_ROWS_PER_PAGE: 5,
    DATE_FORMAT: "YYYY-MM-DD HH:mm",
    DATE_TIME_FILTERATION_KEYS: [
      "Last 30 minute",
      "Last hour",
      "Last 6 hours",
      "Last 12 hours",
      "Last 24 hours",
      "Last week",
    ],
  };
  export const PAGINATIONS_LIMIT = {
    DEFAULT_PAGINATION_LIMIT: 50,
  };
  export const USER_ROLES = {
    BackOffice: 1,
    Travel_Agent: 2,
  };
  export const TicketType = [
    { id: 1, name: "1st class",},
    { id: 2, name: "2nd class",},
    { id: 3, name: "3rd class",},
  ];
  export const TRAIN_SCREEN_MODES = {
    CREATE: "CREATE",
    EDIT: "EDIT",
    VIEW: "VIEW",
    DELETE: "DELETE",
  };export const Train_Ticket_Classes = [
    { id: 1, name: "First Class" },
    { id: 2, name: "Second Class" },
    { id: 3, name: "Third Class" },
  ];
  export const Train_Types = [
    { id: 1, name: "Express" },
    { id: 2, name: "Inter-City" },
    { id: 3, name: "Slow" },
  ];
  export const UserRoles = [
    { roleID: 1, roleName: "user" },
    { roleID: 2, roleName: "Travel Agent" },
    { roleID: 3, roleName: "Back Office" },
  ];
  
  export const Ticket_Counts = [
    { id: 1, name: "1 Ticket" },
    { id: 2, name: "2 Tickets" },
    { id: 3, name: "3 Tickets" },
    { id: 4, name: "4 Tickets" },
  ];
  export const stations = [
    {
      stationId: 1,
      station: "Station A",
    },
    {
      stationId: 2,
      station: "Station B",
    },
    {
      stationId: 3,
      station: "Station C",
    },
    {
      stationId: 4,
      station: "Station D",
    },
  ];