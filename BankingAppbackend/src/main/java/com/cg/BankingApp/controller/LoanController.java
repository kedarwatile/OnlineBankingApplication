package com.cg.BankingApp.controller;


import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cg.BankingApp.entity.Loan;
import com.cg.BankingApp.exception.LoanNotFoundException;
import com.cg.BankingApp.service.ILoanService;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class LoanController {
	@Autowired
	
	private ILoanService loanService;
	//private IAccountService accountService;
	
	//Update account in database
	@PostMapping("/loan/add")
	public Loan addLoan(@Valid @RequestBody  Loan add)
	{
		
		
		loanService.addLoan(add);
		System.out.println("Done Adding");
		return add;
	}
	
	//View All account from database

	@GetMapping("/loan/viewall")
	public  List<Loan> loanDetails(){
		return loanService.viewAllLoan();
	}
	

	
	
	
	//Update account in database
			@PutMapping("loan/updateloan/{loanId}")
	public ResponseEntity<Loan> updateLoan(@PathVariable(value="loanId") Long loanId, @RequestBody Loan updln) throws LoanNotFoundException
	{
		Loan loan = loanService.viewLoanById(loanId).orElseThrow(()-> new LoanNotFoundException("Loan not Found with this id: "+loanId));
		//loan.setLoanId(updln.getLoanId());
                loan.setApplicant_name(updln.getApplicant_name());
                //loan.setEmail(updln.getEmail());
                loan.setPhoneNumber(updln.getPhoneNumber());
                //loan.setAddress(updln.getAddress());
                loan.setDateOfApplication(updln.getDateOfApplication());
                loan.setBirthDate(updln.getBirthDate());
                loan.setId_type(updln.getId_type());
                loan.setIdProofNo(updln.getIdProofNo());
                loan.setMarital_status(updln.getMarital_status());
                loan.setPlace_of_work(updln.getPlace_of_work());
                loan.setJob_title(updln.getJob_title());
                loan.setEmployement_status(updln.getEmployement_status());
                loan.setAnual_income(updln.getAnual_income());
                loan.setAdminLoanAproval(updln.getAdminLoanAproval());
                loan.setAcceptancebutton(updln.getAcceptancebutton());
                loan.setLoanType(updln.getLoanType());
                loan.setLoanAmount(updln.getLoanAmount());
                
                
                Loan updatedLoan =loanService.updateLoan(loan);
	    return ResponseEntity.ok(updatedLoan);
	}
			
           //Delete Account by using account ID
	    @DeleteMapping("loan/delete/{loanId}")
	    public Map<String,Boolean> removeLoan(@PathVariable(value="loanId") long loanId) throws LoanNotFoundException
		{
			Loan loan = loanService.viewLoanById(loanId).orElseThrow(()-> new LoanNotFoundException("No loan found with this id: "+loanId));
			loanService.removeLoan(loan);
		    Map<String,Boolean> response = new HashMap<>();
		    response.put("loan id "+loanId+ " is Deleted", Boolean.TRUE);
		    return response;
		}
		
		
		/*public ResponseEntity<HttpStatus> removeLoan(@PathVariable("loanId") long id) {
			try {
				loanRepository.deleteById(id);
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			} catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}*/
		
			
		
			/*
			 * Method for getting booking record with given booking id-GET
			 */
			@GetMapping("loan/byid/{loanId}")
			public ResponseEntity <Loan>  viewLoanById(@PathVariable(value = "loanId")long  loanId ) throws LoanNotFoundException
			{ 
				System.out.println( "lid = "+loanId);
			 Loan loan =loanService.viewLoanById(loanId).orElseThrow(()-> new LoanNotFoundException("No loan Id found with Id: "+loanId));
			 return ResponseEntity.ok().body(loan);
			}	
			
			
			

			//Display messages assigned as per Validation Constraints
			@ResponseStatus(HttpStatus.BAD_REQUEST)
			@ExceptionHandler(MethodArgumentNotValidException.class)
			public Map<String, String> handleMethodArgumentNotValid(MethodArgumentNotValidException ex)
			{
				Map<String, String> errors = new HashMap<>();
				
				ex.getBindingResult().getFieldErrors().forEach(error ->
		        errors.put(error.getField(), error.getDefaultMessage()));
		    
		    return errors;
				
			}
	
			@RequestMapping(value = "Test" , method = RequestMethod.POST)
			public String Test(@RequestParam("file") MultipartFile file, String name) throws IOException 
				{

				
				    String UPLOAD_DIR="C:\\Users\\tjivrajb\\Downloads\\projects data";
				    
				
				            
				            Files.copy(file.getInputStream(),Paths.get(UPLOAD_DIR+File.separator+file.getOriginalFilename()) ,StandardCopyOption.REPLACE_EXISTING);
				            

							ObjectMapper Obj = new ObjectMapper();
							return Obj.writeValueAsString("success");		
				            
				      
						
					
			
			
			
			
			
			}
			
}
		