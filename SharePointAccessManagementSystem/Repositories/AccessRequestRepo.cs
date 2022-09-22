using Microsoft.EntityFrameworkCore;
using SharePointAccessManagementSystem.Models;

namespace SharePointAccessManagementSystem.Repositories
{
    public class AccessRequestRepo : IAccessRequestRepo
    {
        private readonly AccessDbContext _context;

        public AccessRequestRepo(AccessDbContext context)
        {
            _context = context;
        }

        public  void Add(AccessRequest accessRequest)
        {
            _context.AccessRequests.Add(accessRequest);
            _context.SaveChanges();
        }

        public AccessRequest GetAccessRequest(int id)
        {
          return  _context.AccessRequests.FirstOrDefault(t => t.Id == id);
        }

        public bool isDuplicate(AccessRequest accessRequest)
        { 
            return _context.AccessRequests.Any(t => t.EmailId == accessRequest.EmailId && t.Path == accessRequest.Path);
        }
        public IQueryable<AccessRequest> GetPendingRequests(string folderPath)
        {
           return _context.AccessRequests.Where(t => t.State == "Pending" && t.Path == folderPath);
        }

        public IQueryable<AccessRequest> GetUserAccesses(string emailId)
        {
            return _context.AccessRequests.Where(t => t.EmailId == emailId);
        }

        public void Update(int id, AccessRequest existingRequest)
        {
            _context.AccessRequests.Update(existingRequest);
            _context.SaveChanges();
        }
    }
}
