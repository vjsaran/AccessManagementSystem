using AutoMapper;
using SharePointAccessManagementSystem.Models;

namespace SharePointAccessManagementSystem.Mapping
{
    public class AccessRequestMapping : Profile
    {
        public AccessRequestMapping()
        {
            CreateMap<AccessRequest, AccessRequestCreateDto>().ReverseMap();
            CreateMap<AccessRequest, AccessRequestUpdateDto>().ReverseMap();
        }
    }
}
