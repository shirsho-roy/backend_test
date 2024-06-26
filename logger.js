import { createLogger, format, transports } from 'winston';
//createLogger to create customised logger
//format: to give layout of data
//transports: transport of data from one endpoint to other and logging of that data
const { combine, timestamp, json, colorize } = format;

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `${level}: ${message}`;
  })
);

// Create a Winston logger
const logger = createLogger({
  level: 'info',
  format: combine(
    colorize(),
    timestamp(),
    json()
  ),
  transports: [
    new transports.Console({
      format: consoleLogFormat
    }),
    new transports.File({ filename: 'app.log' }) //creates a log file
  ],
});

export default logger;