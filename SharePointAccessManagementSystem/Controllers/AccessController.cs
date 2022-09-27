using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SharePointAccessManagementSystem.Models;
using SharePointAccessManagementSystem.Repositories;
using System.Net;

namespace SharePointAccessManagementSystem.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AccessController : ControllerBase
    {

        private readonly ILogger<AccessController> _logger;
        private readonly IMapper _mapper;
        private readonly IAccessRequestRepo _accessRequestRepo;

        public AccessController(ILogger<AccessController> logger, IAccessRequestRepo accessRequestRepo, IMapper mapper)
        {
            _logger = logger;
            _accessRequestRepo = accessRequestRepo;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<AccessRequest> GetAccessRequest(int id)
        {
            var accessRequest =  _accessRequestRepo.GetAccessRequest(id);
            if (accessRequest == null)
            {
                return NotFound();

            }
            return Ok(accessRequest);

        }

        [HttpGet]
        [Route("pendingRequests")]
        public  ActionResult<AccessRequest> GetPendingRequests(string folderPath)
        {
            var accessRequests = _accessRequestRepo.GetPendingRequests(folderPath); 
            if (accessRequests == null)
            {
                return NotFound();

            }
            return Ok(accessRequests);

        }

        [HttpGet]
        [Route("userAccess")]
        public ActionResult<AccessRequest> GetUserAccesses(string emailId)
        {
            var accessRequests = _accessRequestRepo.GetUserAccesses(emailId);
           
            if (accessRequests == null)
            {
                return NotFound();

            }
            return Ok(accessRequests);

        }

        [HttpPost(Name = "CreateAccessRequest")]
        public ActionResult<AccessRequest> CreateAccessRequest(AccessRequestCreateDto accessRequestDto)
        {
            if (accessRequestDto == null)
            {
                return BadRequest();
            }

            var accessRequest = _mapper.Map<AccessRequest>(accessRequestDto);
            if (_accessRequestRepo.isDuplicate(accessRequest))
            {
                return Conflict();
            }
            _accessRequestRepo.Add(accessRequest);
            return CreatedAtRoute(nameof(CreateAccessRequest), accessRequest);

        }

        [HttpPut]
       
        public  ActionResult<AccessRequest> UpdateAccessRequest(int id, [FromBody] AccessRequestUpdateDto accessRequestDto)
        {
            if (accessRequestDto == null)
            {
                return BadRequest();
            }

            var existingRequest = _accessRequestRepo.GetAccessRequest(id);
            
            if (existingRequest == null)
            {
                return NotFound();
            }
            _mapper.Map(accessRequestDto,existingRequest);
            _accessRequestRepo.Update(id, existingRequest);
            
            return Ok(existingRequest);
        }

    }
}
