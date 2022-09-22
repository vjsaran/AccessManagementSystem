using SharePointAccessManagementSystem.Models;

namespace SharePointAccessManagementSystem.Repositories
{
    public interface IAccessRequestRepo
    {
        AccessRequest GetAccessRequest(int id);
        IQueryable<AccessRequest> GetPendingRequests(string folderPath);
        IQueryable<AccessRequest> GetUserAccesses(string emailId);
        void Add(AccessRequest accessRequest);
        void Update(int id, AccessRequest existingRequest);
        bool isDuplicate(AccessRequest accessRequest);
    }
}
