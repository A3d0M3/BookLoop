using System;
@using BlazorServerApp.Data
@using Newtonsoft.Json
@using BlazorServerApp.Services
@using System.Security.Claims
@inject AuthenticationStateProvider AuthenticationStateProvider
@inject NavigationManager NavigationManager
@inject Blazored.LocalStorage.ILocalStorageService localStorageService
@inject IUserService userService
@inject IJSRuntime jsRunTime


@code {

    private User user;
public string LoginMesssage { get; set; }
ClaimsPrincipal claimsPrincipal;

[CascadingParameter]
private Task<AuthenticationState> authenticationStateTask { get; set; }

protected async override Task OnInitializedAsync()
{
    user = new User();

    claimsPrincipal = (await authenticationStateTask).User;

    if (claimsPrincipal.Identity.IsAuthenticated)
    {
        NavigationManager.NavigateTo("/index");
    }
    {
        user.EmailAddress = "philip.cramer@gmail.com";
        user.Password = "philip.cramer";
    }

}

private async Task<bool> ValidateUser()
{
    //assume that user is valid
    //call an API

    var returnedUser = await userService.LoginAsync(user);

    if (returnedUser.EmailAddress != null)
    {
        await ((CustomAuthenticationStateProvider)AuthenticationStateProvider).MarkUserAsAuthenticated(returnedUser);
        NavigationManager.NavigateTo("/index");
    }
    else
    {
        LoginMesssage = "Invalid username or password";
    }

    return await Task.FromResult(true);
}

}


    public partial class User
{
    public int UserId { get; set; }
    public string EmailAddress { get; set; }
    public string Password { get; set; }
    public string Source { get; set; }
    public string FirstName { get; set; }
    public string MiddleName { get; set; }
    public string LastName { get; set; }
    public string Region { get; set; }
    public string Settlement { get; set; }
    public int PubId { get; set; }
    public DateTime? HireDate { get; set; }
    public string ConfirmPassword { get; set; }
    public string AccessToken { get; set; }
    public string RefreshToken { get; set; }
}
}
