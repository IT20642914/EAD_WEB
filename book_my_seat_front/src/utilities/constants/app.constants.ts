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