namespace server.Services;

public class AuthService : IAuthService
{
    private readonly IAuthDbService authDbService;

    public AuthService(IAuthDbService authDbService)
    {
        this.authDbService = authDbService;
    }


    public async Task<string?> ValidateAsync(string username, string password)
    {
        var user = await authDbService.GetUserByUsernameAsync(username);
        if (user is null)
        {
            return null;
        }

        

        return "Here we GO!";
    }
}