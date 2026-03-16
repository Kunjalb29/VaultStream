using System;
using VaultStream.Domain.Entities;
using Xunit;

namespace VaultStream.Domain.Tests
{
    public class UserTests
    {
        [Fact]
        public void User_Initialization_ShouldSetDefaultsCorrectly()
        {
            // Act
            var user = new User();

            // Assert
            Assert.NotEqual(Guid.Empty, user.Id);
            Assert.Equal("User", user.Role);
            Assert.True(user.CreatedAt <= DateTime.UtcNow);
        }
    }
}
