namespace server.Models;

public class DbUser
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Hash { get; set; }
    public string Salt { get; set; }

    public DbUser(int id, string username, string hash, string salt)
    {
        Id = id;
        Username = username;
        Hash = hash;
        Salt = salt;
    }
}