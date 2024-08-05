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

const IsBrowser: boolean = typeof window !== 'undefined' && typeof window.document !== 'undefined';
const ToLogLevel = (level: string): number => LogLevel.has(level) ? LogLevel[level] : -1;

function IsEnabled(level: number): boolean {
    // suppress this entirely client side
    if (IsBrowser) return false;

    return ToLogLevel(process.env.LOG_LEVEL) >= level;
}

// TODO: hook into actual log library, e.g. opentelemetry
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