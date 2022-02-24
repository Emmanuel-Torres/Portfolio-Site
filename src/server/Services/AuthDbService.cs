using Npgsql;
using server.Models;

namespace server.Services;

public class AuthDbService : IAuthDbService
{
    private readonly IConfiguration configuration;

    public AuthDbService(IConfiguration configuration)
    {
        this.configuration = configuration;
    }

    public async Task<DbUser?> GetUserByUsernameAsync(string username)
    {
        using var conn = new NpgsqlConnection(configuration["WIREGUARD_DB"]);
        await conn.OpenAsync();
        
        using var cmd = new NpgsqlCommand("SELECT * FROM wireguard.user WHERE user_username = @username", conn);
        cmd.Parameters.AddWithValue("username", username);
        await cmd.PrepareAsync();
        
        using var reader = await cmd.ExecuteReaderAsync();
        
        while (await reader.ReadAsync())
        {
            var user = new DbUser(reader.GetInt32(0), reader.GetString(1), reader.GetString(2), reader.GetString(3));
            return user;
        }

        return null;
    }
}
