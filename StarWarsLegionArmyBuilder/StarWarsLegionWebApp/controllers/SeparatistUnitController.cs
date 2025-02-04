using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/separatist_units")]
[ApiController]
public class SeparatistUnitController : ControllerBase
{
    
    private readonly AppDbContext _context;

    public SeparatistUnitController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<SeparatistUnit>>> GetUnits()
    {
        var units = await _context.separatist_units.ToListAsync();
        return Ok(units);
    }
}