using System.Reflection.PortableExecutable;

namespace SharePointAccessManagementSystem.Models
{
    public class AccessRequest
    {
        public int Id { get; set; }
        public string EmailId { get; set; }
        public string Path { get; set; }
        public string State { get; set; } = "Pending";
        public string ApprovedBy { get; set; } = String.Empty;
        public string ApprovedAt { get; set; } = String.Empty;
    }
}
