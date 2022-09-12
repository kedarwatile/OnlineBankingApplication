package com.cg.BankingApp.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cg.BankingApp.entity.Admin;
import com.cg.BankingApp.exception.AdminNotFoundException;
import com.cg.BankingApp.service.IAdminService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

@RequestMapping("/api")
public class AdminController {
	@Autowired
	private IAdminService iAdminservice;
	
	@Autowired
	LoginController loginController;
	
	@PostMapping("/addAdmin")
	public Admin addAdmin(@Valid @RequestBody Admin admin) {
		return iAdminservice.addAdmin(admin);
	}
//	
//	@DeleteMapping("/removeAdmin/{adminId}")
//	public Admin  removeAdmin (@PathVariable("adminId") Admin admin ) throws AdminNotFoundException{
//		return iAdminservice.removeAdmin (admin );
//	}
	
	//Delete Account by using account ID
    @DeleteMapping("/removeadmin/{adminId}")
    public Map<String,Boolean> removeAdmin(@PathVariable(value="adminId") int adminId) throws  AdminNotFoundException
	{
		Admin admin = iAdminservice.viewAdmin(adminId).orElseThrow(()-> new AdminNotFoundException("No Admin found with this id: "+adminId));
		iAdminservice.removeAdmin(admin);
	    Map<String,Boolean> response = new HashMap<>();
	    response.put("admin id "+adminId+ " is Deleted", Boolean.TRUE);
	    return response;
	}
	
//	@PostMapping("/adminn ")
//	 public ResponseEntity<Admin> validateAdmin (@RequestBody Admin  admin ) throws AdminNotFoundException {
//		Admin admin1=iAdminservice.validateAdmin(admin);
//		return new ResponseEntity<Admin>(admin1,HttpStatus.OK);
//	}
	@GetMapping("/adminn/signout")
	public String signOut(Admin admin) throws AdminNotFoundException
	{
		return iAdminservice.signOut(admin);
	}
	
	//Update admin in database
	@PutMapping("/admin/update/{adminId}")
	public ResponseEntity <Admin> updateAdminById(@PathVariable(value="adminId") Integer adminId, @RequestBody Admin updadd) throws AdminNotFoundException
	{
		Admin add = iAdminservice.viewAdmin(adminId).orElseThrow(()-> new AdminNotFoundException("No admin found with gives adminId:"+adminId));
		add.setFirstName(updadd.getFirstName());
		add.setLastName(updadd.getLastName());
		add.setMobNo(updadd.getMobNo());
		add.setEmail(updadd.getEmail());
		
		
		Admin updatedAdmin = iAdminservice.updateAdmin(add);
		return ResponseEntity.ok(updatedAdmin);	
			
	}
	
//View All admin from database
@GetMapping("/admin/viewall")
public List <Admin> ViewAllAdmin()
{
return iAdminservice.viewAllAdmin();
}

//View Admin using admin ID
@GetMapping("/admin/view/{adminId}")
public ResponseEntity <Admin> viewAdmin(@PathVariable(value = "adminId")Integer adminId ) throws AdminNotFoundException
{
Admin add = iAdminservice.viewAdmin(adminId).orElseThrow(()-> new AdminNotFoundException("No admin found with given adminId: "+adminId));
return ResponseEntity.ok().body(add);		
}	


	 @ResponseStatus(HttpStatus.BAD_REQUEST)
	    @ExceptionHandler(MethodArgumentNotValidException.class)
	    public Map<String, String> handleMethodArgumentNotValid(MethodArgumentNotValidException ex) {
	        Map<String, String> errors = new HashMap<>();
	    
	        ex.getBindingResult().getFieldErrors().forEach(error ->
	            errors.put(error.getField(), error.getDefaultMessage()));
	        
	        return errors;
	    }
	
}
	