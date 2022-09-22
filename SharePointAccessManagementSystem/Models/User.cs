namespace SharePointAccessManagementSystem.Models
{
    public class User
    {
        public int Id { get; set; }
        public string EmailId { get; set; }
        public IList<AccessRequest> Acesses { get; set; } = new List<AccessRequest>();

    }
}
