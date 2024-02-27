using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class AddedSkillsString : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ThumbnailUrl",
                table: "Stories");

            migrationBuilder.AddColumn<string>(
                name: "Skills",
                table: "Stories",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Skills",
                table: "Stories");

            migrationBuilder.AddColumn<string>(
                name: "ThumbnailUrl",
                table: "Stories",
                type: "text",
                nullable: true);
        }
    }
}
