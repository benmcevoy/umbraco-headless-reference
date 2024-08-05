export function AllowedOrigin(request: Request): string {
    const allowed = (process.env.CORS_ALLLOWED_ORIGINS).split(';');
    const origin = request.headers.get("origin")

    if(allowed.includes(origin)){
        return origin;
    }

    return null;
}