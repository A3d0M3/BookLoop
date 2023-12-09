using System;
using MySql.Data.MySqlClient;


namespace DbConnection
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string connectionString = Environment.GetEnvironmentVariable("DbConnectionString");
            MySqlConnection connection = new MySqlConnection(connectionString);

            connection.Open();

            string query = "DELETE FROM author WHERE id > 8";

            MySqlCommand command = new MySqlCommand(query, connection);

            command.ExecuteNonQuery();

            connection.Close();
        }
    }
}
