const DEBUG = 0;
const INFO = 1;
const WARN = 2;
const ERROR = 3;

const LogLevel = new Map<string, number>(
    [
        ["DEBUG", DEBUG],
        ["INFO", INFO],
        ["WARN", WARN],
        ["ERROR", ERROR],
    ]
);

function ToLogLevel(level: string): number{
    if(LogLevel.has(level)) return LogLevel[level];
    return -1;
}

function IsEnabled(level: number): boolean {
    return ToLogLevel(process.env.LOG_LEVEL) >= level;
}

// TODO: hook into actual log library, e.g. opentelemetry
// also, may want to suppress this entirely client side
export function Debug(message: any) {
    if (IsEnabled(DEBUG)) console.debug(message)
}

export function Info(message: any) {
    if (IsEnabled(INFO)) console.info(message)
}

export function Warn(message: any) {
    if (IsEnabled(WARN)) console.warn(message)
}

export function Error(message: any, error: Error = null) {
    if (IsEnabled(ERROR)) {
        console.error(message)
        if (error) console.error(error)
    }
}